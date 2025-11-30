# AI Triage Workflow

![AI Triage Workflow](workflow_diagram.png)

flowchart TD

flowchart TD
    U[Healthcare Staff] -->|Open app| A[AI Triage System]

    A --> B[Login Screen]
    B -->|Enter credentials| C{Credentials valid?}
    C -->|No| B
    C -->|Yes| D[Dashboard]

    D -->|Search patient| E[Enter search query]
    D -->|View list| F[Patient list]

    E --> G[Show matching patients]
    F --> G

    G -->|Select patient| H[Patient Details Page]

    H --> I[View history & past visits]
    H -->|Click 'Generate AI Summary'| J[AI Module]

    J --> K[Process patient data]
    K --> L[Return AI-generated summary]

    L --> M[Display summary on screen]

    M -->|Add/edit notes, update info| N[Save changes]
    N --> O[Update database]

    O --> P[Return to Dashboard]
    P --> Q{Logout?}
    Q -->|Yes| R[End Session]
    Q -->|No| D
