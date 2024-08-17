import { RuleConfigSeverity } from "@commitlint/types";

export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "body-leading-blank": [2, "always"],
        "footer-leading-blank": [2, "always"],
        "header-max-length": [2, "always", 72],
        "subject-case": [
            2,
            "never",
            ["sentence-case", "start-case", "pascal-case", "upper-case"],
        ],
        "subject-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "type-case": [2, "always", "lower-case"],
        "type-empty": [2, "never"],
        "type-enum": [
            RuleConfigSeverity.Error,
            "always",
            [
                "build", // Changes that affect the build system or external dependencies
                "chore", // Other changes that don't modify src or test files
                "ci", // Changes to our CI configuration files and scripts
                "docs", // Documentation only changes
                "feat", // A new feature
                "fix", // A bug fix
                "perf", // A code change that improves performance
                "refactor", // A code change that neither fixes a bug nor adds a feature
                "revert", // Reverts a previous commit
                "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
                "test", // Adding missing tests or correcting existing tests
            ],
        ],
    },
};
