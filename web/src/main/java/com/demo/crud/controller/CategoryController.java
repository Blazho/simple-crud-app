package com.demo.crud.controller;

import com.demo.crud.model.Category;
import com.demo.crud.repository.CategoryRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryRepo categoryRepository;

    public CategoryController(CategoryRepo categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping
    public List<Category> getAll(){
        return categoryRepository.findAll();
    }
    @GetMapping("/{id}")
    public Category getById(@PathVariable Long id){
        return categoryRepository.findById(id).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found!"));
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        categoryRepository.deleteById(id);
    }
    @PutMapping("/update")
    public Category updateById(@RequestBody Category category){
        return categoryRepository.save(category);
    }
    @PostMapping("/add")
    public Category save(@RequestBody Category category) {
        return categoryRepository.save(category);
    }
}
