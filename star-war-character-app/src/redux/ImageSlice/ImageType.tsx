export interface Images{
    id: number;
    width: number;
    height: number;
    url: string;
    download_url: string;
    author: string
}
export interface ImageList{
    list: Images[]
    loading: boolean;
}