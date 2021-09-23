import { Component, OnInit } from '@angular/core';
import { Observable, interval, from, Subject } from 'rxjs';
import { take, filter, map, distinctUntilChanged, switchMap, tap, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchSubject$: Subject<unknown> | any;

  constructor(private http: HttpClient){}
  title = 'rxjs';
  observable$: any;
  suscription: any;
  searchString: any;
  results$ : any;

  ngOnInit(): void {

   
    /*
    this.observable$ = new Observable(( observer: any ) =>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout( ()=>{
        observer.next(4);
        observer.complete();
      }, 4000);
      
    });

    this.suscription = this.observable$.subscribe(
      ( value: any ) => console.log("value =>", value ),
      ( err: any) => console.log(err),
      ()=>console.log("FInito")
    ); */


    /*
    const interval$ = interval(500);
    const example = interval$.pipe(take(9));
    const suscribe = example.subscribe(val=> console.log("take: ", val)); */

    /*
    const fromTest = from([ 1, 2, 4, 8,  5, 2,3,7]);

    //const example2 = fromTest.pipe( filter( val =>  val % 2 === 1   ), take(2));
    const example2 = fromTest.pipe( filter( val =>  val % 2 === 1   ), take(2));
    const suscribe2 = example2.subscribe(val=> console.log("impar : ", val)); */

    this.searchSubject$ = new Subject();

    
    this.results$ = this.searchSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(x=>console.log('tap', x)),
      switchMap( searchString => this.queryAPI( searchString ))
    ) 
  }

  

  queryAPI( searchString : any ){
    console.log('queryAPI', searchString);
    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
    .pipe(map((result: any) => {return result['data']['children']}))
  }

  inputChanged($event: any){
    this.searchSubject$.next($event);
  }

  ngOnDestroy(): void {
    this.suscription.unsuscribe();
  }

}
