export interface Video {
    title:string;
    author:string;
    id:string;
    videoDetails:VideoDetails[];
  }
  
  export interface VideoDetails{
    age:number;
    region:string;
    date:string;
  }