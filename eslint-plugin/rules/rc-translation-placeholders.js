export default {
    meta: {
        type: 'problem',
        docs: {
            description:
                'Enforce matching count of placeholders and replacement array size in _rc(), and validate [rc] tag pairing',
        },
        schema: [],
        messages: {
            mismatch:
                'Function {{name}}() has {{placeholders}} placeholder(s) but the replacement array has {{args}} element(s).',
            unclosedTag: 'Function _rc() string has an unclosed [rc] tag.',
            unexpectedClose:
                'Function _rc() string has a [/rc] closing tag without a matching opening [rc] tag.',
        },
    },
    create(context) {
        return {
            CallExpression(node) {
                const { callee, arguments: args } = node;

                if (callee.type !== 'Identifier' || callee.name !== '_rc') {
                    return;
                }

                const [firstArg, secondArg] = args;
                if (
                    !firstArg ||
                    firstArg.type !== 'Literal' ||
                    typeof firstArg.value !== 'string'
                ) {
                    return;
                }

                const str = firstArg.value;

                // Parse tokens in order to detect ordering issues (e.g. [/rc] before [rc]).
                const tokenRegex = /\[rc\]|\[\/rc\]|\[rc\/\]/g;
                let tokenMatch;
                let openStack = 0;
                let validPairs = 0;
                let selfClosingCount = 0;
                let hasTagError = false;

                while ((tokenMatch = tokenRegex.exec(str)) !== null) {
                    const token = tokenMatch[0];
                    if (token === '[rc]') {
                        openStack++;
                    } else if (token === '[/rc]') {
                        if (openStack > 0) {
                            openStack--;
                            validPairs++;
                        } else {
                            context.report({ node, messageId: 'unexpectedClose' });
                            hasTagError = true;
                            break;
                        }
                    } else {
                        selfClosingCount++;
                    }
                }

                if (openStack > 0) {
                    context.report({ node, messageId: 'unclosedTag' });
                    hasTagError = true;
                }

                if (hasTagError) {
                    return;
                }

                const traditionalCount = (str.match(/(%s)|(%d)/g) ?? []).length;
                const placeholderCount = traditionalCount + selfClosingCount + validPairs;

                if (placeholderCount === 0) {
                    return;
                }

                // Skip count check if the array is dynamic (cannot be statically analyzed)
                if (!secondArg || secondArg.type !== 'ArrayExpression') {
                    return;
                }

                const argCount = secondArg.elements.length;
                if (placeholderCount !== argCount) {
                    context.report({
                        node,
                        messageId: 'mismatch',
                        data: {
                            name: callee.name,
                            placeholders: placeholderCount,
                            args: argCount,
                        },
                    });
                }
            },
        };
    },
};
