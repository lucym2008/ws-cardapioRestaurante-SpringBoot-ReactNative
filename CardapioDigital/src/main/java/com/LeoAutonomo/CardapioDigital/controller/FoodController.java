package com.LeoAutonomo.CardapioDigital.controller;

import com.LeoAutonomo.CardapioDigital.controller.dto.FoodRequestDTO;
import com.LeoAutonomo.CardapioDigital.controller.dto.FoodResponseDTO;
import com.LeoAutonomo.CardapioDigital.repository.FoodRepository;
import com.LeoAutonomo.CardapioDigital.service.Food;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("food")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @GetMapping
    public ResponseEntity<List<FoodResponseDTO>> getAll() {

        List<FoodResponseDTO> foodListDto =
                foodRepository.findAll()
                        .stream()
                        .map(FoodResponseDTO::new)
                        .toList();

        return ResponseEntity.ok().body(foodListDto);
    }

    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data) {

        Food foodData = new Food(data);
        foodRepository.saveAndFlush(foodData);
    }

}
