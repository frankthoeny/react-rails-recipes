class Api::V1::RecipesController < ApplicationController
  def index
    recipe = Recipe.all.order(:name)
    render json: recipe
  end

  def create
    recipe = Recipe.create!(recipe_params)
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def show
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def destroy
    recipe&.destroy
    render json: { message: 'Recipe killed!' }
  end

  def update
    recipe = Recipe.find(params[:id])
    if recipe.update_attributes!(recipe_params)
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  private

  def recipe_params
    params.permit(:id, :name, :image, :ingredients, :instruction)
  end

  def recipe
    @recipe ||= Recipe.find(params[:id])
  end
end
