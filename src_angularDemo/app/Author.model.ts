export class Author {
  authors: any[];


  constructor() {

  this.authors = [
  {authorId: 1, authorName: 'raj', authorGender: 'male', mStatus: 'Married'},
  {authorId: 2, authorName: 'rajeev', authorGender: 'male', mStatus: 'Unmarried'},
  {authorId: 3, authorName: 'rajeshwari', authorGender: 'female', mStatus: 'Married'},
  {authorId: 4, authorName: 'rajni', authorGender: 'female', mStatus: 'Unmarried'} ];

  }

  getAuthors() {
      return this.authors;
  }
}

