import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDestinyComponent } from './search-destiny.component';

describe('SearchDestinyComponent', () => {
  let component: SearchDestinyComponent;
  let fixture: ComponentFixture<SearchDestinyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDestinyComponent]
    });
    fixture = TestBed.createComponent(SearchDestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
