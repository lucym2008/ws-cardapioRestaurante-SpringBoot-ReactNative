package com.LeoAutonomo.CardapioDigital.repository;

import com.LeoAutonomo.CardapioDigital.service.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {
}
