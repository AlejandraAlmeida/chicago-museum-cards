
export interface ArtWorksResponse {
 pagination: any;
 data: any;
 info: any;
 config:any;
}
// TODO fix pagination
// export interface Pagination {
//     total: number;
//     limit: number;
//     offset: number;
//     total_pages: number;
//     current_page: number;
//     next_url: string
// }
export interface ArtWorkMappedItem{
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
