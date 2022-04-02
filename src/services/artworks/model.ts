
export interface ArtWorksResponse {
 pagination: Pagination;
 data: ArtWorkItem [];
}
// TODO fix pagination
export interface Pagination {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string
}
export interface ArtWorkItem{
    id: number;
    title: string;
    dateDisplay: string;
    dimensions: string;
    technique: string; // medium-display
    color: Color;
    departmentTitle: string;
    artistId: number;
    styleTitles: string[];
    imageId: string
}
export interface Color {
    h: number;
    l: number;
    s: number;
    percentage: number;
    polulation: number
}
