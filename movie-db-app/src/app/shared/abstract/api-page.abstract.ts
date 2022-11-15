import { BehaviorSubject, Observable } from "rxjs";
import { MovieModel } from "../models/movie.model";
import { ApiService } from "../services/api.service";

export abstract class ApiPageAbstract {
  public gridData!: Observable<MovieModel[]>;
  public gridDataCount: number = 0;
  public hasChanges$ = new BehaviorSubject(true);
  public searchValue: string = '';
  public titleCount: string = 'All';
  getSearchValue(value: string): void {
    this.searchValue = value
  };
  protected constructor(public apiService: ApiService) { }

}
