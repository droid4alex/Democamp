class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :project_id, null: false
      t.integer :author_id, null: false      
      t.timestamps
    end
    add_index :messages, :project_id
    add_index :messages, :author_id
  end
end
