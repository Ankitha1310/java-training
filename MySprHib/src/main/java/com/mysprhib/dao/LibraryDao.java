package com.mysprhib.dao;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mysprhib.model.Library;

@Component
public class LibraryDao {

	@Autowired
	SessionFactory sessionFactory;
	
	@Transactional
	public void saveBook(Library lib) 
	{
		
		Session session = sessionFactory.getCurrentSession();
			session.save(lib);
		
	}
	
	
	@Transactional
	public ArrayList<Library> getBook()
	{
	//working
	Session session = sessionFactory.getCurrentSession();
	ArrayList<Library> bookList=(ArrayList<Library>)session.createQuery("from Library").list();
	return bookList;

	}
	
	@Transactional
	public Library getBookById(String id)
	{
		Session session=sessionFactory.getCurrentSession();
		Library lib=(Library) session.get(Library.class, id);
		return lib;
	}
	

	@Transactional
	public String updateBook(String id, String name)
	{
		Session session=sessionFactory.getCurrentSession();
		Library book = new Library();
		book.setBookId(id);
		book.setBookName(name);
		session.update(book);
		return "updated";
	}
	
	@Transactional
	public String deleteBook(String id)
	{
		Session session=sessionFactory.getCurrentSession();
		Library lib=(Library) session.get(Library.class, id);
		session.delete(lib);
		return "deleted";
	}
	
	 
	
	
}
