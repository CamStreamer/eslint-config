export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce matching count of placeholders and replacement array size in _()',
        },
        schema: [],
        messages: {
            mismatch:
                'Function {{name}}() has {{placeholders}} placeholder(s) but the replacement array has {{args}} element(s).',
        },
    },
    create(context) {
        return {
            CallExpression(node) {
                const { callee, arguments: args } = node;

                if (callee.type !== 'Identifier' || callee.name !== '_') {
                    return;
                }

                const firstArg = args[0];
                if (
                    !firstArg ||
                    firstArg.type !== 'Literal' ||
                    typeof firstArg.value !== 'string'
                ) {
                    return;
                }

                const placeholderCount = (firstArg.value.match(/(%s)|(%d)/g) ?? []).length;
                if (placeholderCount === 0) {
                    return;
                }

                const argCount = args.length - 1;
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
