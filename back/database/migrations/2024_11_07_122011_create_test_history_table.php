<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test_history', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->integer('users_id');
            $table->date('date')->nullable();
            $table->string('test_name', 45)->nullable();
            $table->integer('score')->nullable();
            
            $table->foreign('users_id', 'fk_test_history_users')->references('id')->on('users')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('test_history');
    }
}
