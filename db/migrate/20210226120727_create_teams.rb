class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.integer :project_id, null: false
      t.integer :member_id, null: false      
      t.timestamps
    end
    add_index :teams, :project_id
    add_index :teams, :member_id
  end
end
