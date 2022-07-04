package com.rgunindi.management.service;

import com.rgunindi.management.model.Student;
import com.rgunindi.management.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements IStudentService {
    @Autowired
    private IStudentRepository studentRepository;
    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }
}
