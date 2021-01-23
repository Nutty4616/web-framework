import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  // Fetches some data from the server about a particular user
  fetch(id: number): AxiosPromise {
   return axios.get(`${this.rootUrl}/${id}`); 
  }

  // Saves some data about this user to the server
  save(data: T): AxiosPromise {
    const { id }= data;
    
    if(id){
      // PUT
     return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // POST
     return axios.post(this.rootUrl, data);
    }
  }
}