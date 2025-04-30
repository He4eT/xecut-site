---
layout: layouts/base.njk
title: Funds
---

# Funds

Xecut&nbsp;&mdash; **некоммерческий** проект,
существование которого невозможно без финансовой поддержки
со&nbsp;стороны участников и&nbsp;гостей.

Наличные пожертвования можно оставить в специальной коробке,
расположенной в хакспейсе.
Для безналичных переводов свяжитесь, пожалуйста, с администраторами
<a target="_blank" href="{{ config.links.chat }}">чата</a>.

## Monthly Expenses

Статья расходов    | Сумма
:----------------- | -----------:
Аренда помещения   | {{ funds.monthly.rent | formatCurrency: funds.monthly.currency }}
Коммунальные счета | {{ funds.monthly.bils | formatCurrency: funds.monthly.currency }}
**Итог**           | **{{ funds.monthly | sumObjectValues | formatCurrency: funds.monthly.currency }}**
