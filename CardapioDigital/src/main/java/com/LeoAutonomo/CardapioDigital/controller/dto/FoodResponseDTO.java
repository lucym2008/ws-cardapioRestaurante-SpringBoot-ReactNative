package com.LeoAutonomo.CardapioDigital.controller.dto;

import com.LeoAutonomo.CardapioDigital.service.Food;

public record FoodResponseDTO(Long id, String title, String url, Integer price) {

    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getUrl(), food.getPrice());
    }

}
