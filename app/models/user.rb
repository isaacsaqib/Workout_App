class User < ActiveRecord::Base
has_many :workouts
has_secure_password
validates(:name,     { :presence     => true })
validates(:email,    { :uniqueness   => { case_sensitive: false }})
validates(:password, { :length       => { :minimum => 8, :maximum => 16 },
                         :presence     => true,
                         :confirmation => true }) # must enter confirmation password
end
