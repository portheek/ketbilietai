<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->integer('users_id');
            $table->string('title', 45)->nullable();
            $table->text('summary')->nullable();
            $table->integer('questions_count')->nullable();
            $table->integer('test_time')->nullable();
            
            $table->foreign('users_id', 'fk_tests_users1')->references('id')->on('users')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests');
    }
}
