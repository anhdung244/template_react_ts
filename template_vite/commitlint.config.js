export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "chore", "style", "refactor", "ci", "revert"]],
    "header-max-length": [2, "always", 100],
    "subject-case": [0, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
  },
}
