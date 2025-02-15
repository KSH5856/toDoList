package com.example.ToDoList.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.ToDoList.Repository.ToDoRepository;
import com.example.ToDoList.model.ResponseBody;
import com.example.ToDoList.model.ToDoModel;

@Service
public class ToDoService {

	@Autowired
	private ToDoRepository repo;

	public List<ToDoModel> getToDoList() {
		return repo.findAll();
	}

	public ResponseEntity<Object> addTask(ToDoModel toDoModel) {
		// TODO Auto-generated method stub
		ResponseBody response = new ResponseBody();
		response.setError(false);
		response.setMessage("Task added successfully");
		repo.save(toDoModel);
		return new ResponseEntity<Object>(response, HttpStatusCode.valueOf(200));
	}

}
