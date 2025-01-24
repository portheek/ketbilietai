<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestsHasCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests_has_categories', function (Blueprint $table) {
            $table->integer('tests_id');
            $table->integer('categories_id');
            
            $table->primary(['tests_id', 'categories_id']);
            $table->foreign('categories_id', 'fk_tests_has_categories_categories1')->references('id')->on('categories')->onDelete('restrict')->onUpdate('restrict');
            $table->foreign('tests_id', 'fk_tests_has_categories_tests1')->references('id')->on('tests')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests_has_categories');
    }
}
