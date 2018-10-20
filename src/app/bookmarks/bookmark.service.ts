import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { BookmarkModel } from "./bookmark.model";

@Injectable()
export class BookmarkService {
  bookmarksChanged = new Subject<BookmarkModel[]>();

  bookmarks: BookmarkModel[] = [
    new BookmarkModel("Google", "http://www.google.com"),
    new BookmarkModel("Facebook", "http://www.facebook.com"),
    new BookmarkModel("Twitter", "http://www.twitter.com")
  ];

  constructor() {}

  setBookmarks(bookmarks: BookmarkModel[]) {
    this.bookmarks = bookmarks;
    this.bookmarksChanged.next(this.bookmarks.slice());
  }

  getBookmarks() {
    return this.bookmarks.slice();
  }

  addBookmark(bookmark: BookmarkModel) {
    this.bookmarks.push(bookmark);
    this.bookmarksChanged.next(this.bookmarks.slice());
  }

  updateBookmark(index: number, newbookmark: BookmarkModel) {
    this.bookmarks[index] = newbookmark;
    this.bookmarksChanged.next(this.bookmarks.slice());
  }

  deleteBookmark(index: number) {
    this.bookmarks.splice(index, 1);
    this.bookmarksChanged.next(this.bookmarks.slice());
  }
}
