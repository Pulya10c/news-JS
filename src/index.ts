import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

// export interface INewsData {
//     id: string;
//     news: {
//       head: string;
//       text: string;
//     }[];
//   }
  
//   export interface INewsSources {
//     id: string;
//     sources: {
//       urlToSource: string;
//     }[];
//   }

//   type IGetRespDataType = INewsData | INewsSources;
  
//   export interface IGetResp1 {
//     data: IGetRespDataType;
//   }
  
//   const isNewsData = (data: IGetRespDataType): data is INewsData => {
//     return (data as INewsData).news !== undefined;
//   };
  
//   const isNewsSources = (data: IGetRespDataType): data is INewsSources => {
//     return (data as INewsSources).sources !== undefined;
//   };
  
//   export const getResp1 = ({
//     data,
//   }: IGetResp1) => {
//     console.log(data.id); // general fields
  
//     if (isNewsData(data)) {
//       console.log(data.news);
//     }
  
//     if (isNewsSources(data)) {
//       console.log(data.sources);
//     }
//   };
