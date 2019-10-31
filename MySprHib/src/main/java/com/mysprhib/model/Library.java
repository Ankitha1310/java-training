package com.mysprhib.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Library {
	
	@Id
	String bookId;
	String bookName;
	
	public String getBookId() {
		return bookId;
	}
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	
	public String toString() {
		return bookId+" "+bookName;
	}
	
}
