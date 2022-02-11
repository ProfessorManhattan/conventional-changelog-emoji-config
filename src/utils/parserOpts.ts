import gitmojiParserOpts from '../parser-opts';

export default {
  ...gitmojiParserOpts,
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  revertPattern: /revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: [`header`, `hash`],
};
