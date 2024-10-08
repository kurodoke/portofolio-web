interface ProjectImageInterface {
    file: string;
    full: false;
}

export interface DeveloperProjectInterface {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    role: string;
    tech: Array<string>;
    image: Array<ProjectImageInterface>;
    public: string;
}
