package com.rgunindi.management.controller;

import com.rgunindi.management.model.Student;
import com.rgunindi.management.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//another post request mapping root / adress
//@RequestMapping(method = RequestMethod.POST)
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private IStudentService iStudentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        iStudentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return iStudentService.getAllStudent();
    }
}
