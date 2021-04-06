class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :checked
      t.datetime :date

      t.timestamps
    end
  end
end
