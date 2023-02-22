package com.demo.crud.prefill;

import com.demo.crud.model.Category;
import com.demo.crud.repository.CategoryRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {

    private final CategoryRepo categoryRepo;

    public DataLoader(CategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    @PostConstruct
    private void init(){
        categoryRepo.save(new Category("Food","Food description"));
        categoryRepo.save(new Category("Sport","Sport description"));
        categoryRepo.save(new Category("Car","Car description"));
    }
}
