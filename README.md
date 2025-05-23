# COMP2068JSFrameworks

flowchart TB
    %% Repository Container
    Repo["COMP2068JSFrameworks Repository"]:::repo

    %% Documentation
    README["README.md"]:::doc

    %% Assignment Modules
    subgraph "Assignments"
        ASS01["ASSIGNMENT01"]:::assignment
        ASS02["ASSIGNMENT02"]:::assignment
    end

    %% Lab Modules
    subgraph "Labs"
        LAB01["LAB01 (lab1.js)"]:::lab
        LAB02["LAB02 (lab2.js)"]:::lab
        LAB03["LAB03"]:::lab
        LAB04["LAB04"]:::lab
    end

    %% Runtime Environment
    Browser["Browser Runtime"]:::runtime

    %% Relationships
    Repo -->|contains| README
    Repo -->|contains| ASS01
    Repo -->|contains| ASS02
    Repo -->|contains| LAB01
    Repo -->|contains| LAB02
    Repo -->|contains| LAB03
    Repo -->|contains| LAB04

    ASS01 -->|"runs in"| Browser
    ASS02 -->|"runs in"| Browser
    LAB01 -->|"runs in"| Browser
    LAB02 -->|"runs in"| Browser
    LAB03 -->|"runs in"| Browser
    LAB04 -->|"runs in"| Browser

    %% Click Events
    click Repo "https://github.com/200584363/comp2068jsframeworks/tree/main//"
    click README "https://github.com/200584363/comp2068jsframeworks/blob/main/README.md"
    click ASS01 "https://github.com/200584363/comp2068jsframeworks/blob/main/ASSIGNMENT01/.gitkeep"
    click ASS02 "https://github.com/200584363/comp2068jsframeworks/blob/main/ASSIGNMENT02/.gitkeep"
    click LAB01 "https://github.com/200584363/comp2068jsframeworks/blob/main/LAB01/lab1.js"
    click LAB02 "https://github.com/200584363/comp2068jsframeworks/blob/main/LAB02/lab2.js"
    click LAB03 "https://github.com/200584363/comp2068jsframeworks/blob/main/LAB03/.gitkeep"
    click LAB04 "https://github.com/200584363/comp2068jsframeworks/blob/main/LAB04/.gitkeep"

    %% Styles
    classDef repo fill:#f9f,stroke:#333,stroke-width:2px;
    classDef assignment fill:#bfb,stroke:#333,stroke-width:2px;
    classDef lab fill:#bbf,stroke:#333,stroke-width:2px;
    classDef runtime fill:#ffa,stroke:#333,stroke-width:2px;
    classDef doc fill:#eee,stroke:#333,stroke-width:1px;
