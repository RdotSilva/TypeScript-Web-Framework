import axios, { AxiosPromise } from "axios";

/**
 * Interface with an optional ID
 * @interface HasId
 */
interface HasId {
  id?: number;
}
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  /**
   * Fetch data
   * @param {number} id - Id of data to fetch
   * @returns {AxiosPromise}
   * @memberof Sync
   */
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  /**
   * Save data
   * @param {T} data - The data to save
   * @returns {AxiosPromise}
   * @memberof Sync
   */
  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
