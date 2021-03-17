class RemovePremiumFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :premium, :boolean
  end
end
