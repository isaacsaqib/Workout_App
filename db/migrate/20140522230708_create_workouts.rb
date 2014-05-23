class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.string :video_url
      t.string :user_id
      t.timestamps
    end
  end
end
