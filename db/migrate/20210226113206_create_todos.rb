class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.boolean :status, null: false, default: false
      t.integer :project_id, null: false
      t.integer :assignee_id, null: false      
      t.datetime :due_date, null: false
      t.timestamps
    end
    add_index :todos, :project_id
    add_index :todos, :assignee_id
  end
end
