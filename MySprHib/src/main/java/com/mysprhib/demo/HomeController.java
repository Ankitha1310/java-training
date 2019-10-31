package com.mysprhib.demo;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.mysprhib.dao.LibraryDao;
import com.mysprhib.model.Library;


@Controller
public class HomeController {
	
	@RequestMapping(value = "/")
	public String home() {
		return "home";
	}
	
	@Autowired
	LibraryDao libraryDao;
	
	@RequestMapping(value = "/saveBook")
	public String saveBook(@ModelAttribute Library lib) {
		
		libraryDao.saveBook(lib);
		
		return "home";
	}
	
	
	@RequestMapping(value = "/displayLib") 
	  public String search(Model model, @ModelAttribute Library lib)
	{
	  ArrayList<Library> BL =  libraryDao.getBook();
	  model.addAttribute("book",BL); 
	  System.out.println(BL);
	  return "displayLib"; 
	  }
	 
	
	
	  @RequestMapping(value = "/displayById") 
	  public String dbi() { 
		  return "displayById"; }
	 
	
	  @RequestMapping(value="/displayBook")    
	    public String displayById(Model m, @RequestParam("id") String id){    
		  Library b = libraryDao.getBookById(id);
		  m.addAttribute("book", b);
	      return "viewBook";    
	    }
	  
	  @RequestMapping(value = "/update") 
	  public String update() { 
		  return "update"; 
		  }
	  
	  @RequestMapping(value = "/updated") 
	  public String updateBook(Model m, @RequestParam("bookId") String id, @RequestParam("bookName") String name){    
		  String b = libraryDao.updateBook(id,name);
		  System.out.println(b);
		  return "home"; 
		  }
	  
	  @RequestMapping(value = "/delete") 
	  public String delete() { 
		  return "delete"; 
		  }
	  
	  @RequestMapping(value = "/deleted") 
	  public String deleteBook(Model m, @RequestParam("id") String id){    
		  System.out.println(id);
		  String b = libraryDao.deleteBook(id);
		  System.out.println(b);
		  return "home"; 
		  }
}

