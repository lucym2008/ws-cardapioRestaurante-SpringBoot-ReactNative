package com.LeoAutonomo.CardapioDigital.service;

import com.LeoAutonomo.CardapioDigital.controller.dto.FoodRequestDTO;
import com.LeoAutonomo.CardapioDigital.controller.dto.FoodResponseDTO;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "foods")
@Entity(name = "foods")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String url;
    private Integer price;

    public Food(FoodRequestDTO data) {
        this.title = data.title();
        this.url = data.url();
        this.price = data.price();
    }
}
