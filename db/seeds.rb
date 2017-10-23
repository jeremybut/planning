# frozen_string_literal: true

User.create!(
  email: 'buttice.j@gmail.com',
  password: 'password',
  password_confirmation: 'password'
)

a1 = Area.create!(display_name: 'Laxou', color: '#E47776')
a2 = Area.create!(display_name: 'Saint Sébastien', color: '#56B1E3')

a1.business_hours.create(
  opens: '09:30', closes: '20:00', day: 1, max_employee: 2
)
a1.business_hours.create(
  opens: '09:30', closes: '20:00', day: 2, max_employee: 2
)
a1.business_hours.create(
  opens: '09:30', closes: '20:00', day: 3, max_employee: 2
)
a1.business_hours.create(
  opens: '09:30', closes: '20:00', day: 4, max_employee: 3
)
a1.business_hours.create(
  opens: '09:30', closes: '20:00', day: 5, max_employee: 3
)
a1.business_hours.create(
  opens: '09:30', closes: '20:00', day: 6, max_employee: 2
)

a2.business_hours.create(
  opens: '09:30', closes: '19:30', day: 1, max_employee: 2
)
a2.business_hours.create(
  opens: '09:30', closes: '19:30', day: 2, max_employee: 2
)
a2.business_hours.create(
  opens: '09:30', closes: '19:30', day: 3, max_employee: 2
)
a2.business_hours.create(
  opens: '09:30', closes: '19:30', day: 4, max_employee: 3
)
a2.business_hours.create(
  opens: '09:30', closes: '19:30', day: 5, max_employee: 3
)
a2.business_hours.create(
  opens: '09:30', closes: '19:30', day: 6, max_employee: 4
)

Employee.create!(display_name: 'Justine', work_time: 1560)
Employee.create!(display_name: 'Johanna', work_time: 1560)
Employee.create!(display_name: 'Elsa', work_time: 1860)
Employee.create!(display_name: 'Julie', work_time: 1860)
Employee.create!(display_name: 'Mylène', work_time: 1860)
Employee.create!(display_name: 'Adeline', work_time: 1560)
