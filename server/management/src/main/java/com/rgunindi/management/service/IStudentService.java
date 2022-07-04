package com.rgunindi.management.service;

import com.rgunindi.management.model.Student;

import java.util.List;

public interface IStudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudent();
}
