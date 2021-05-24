const assortment_header = [
  {
    header: 'Indeks',
    attr: 'index' 
  }, {
    header: 'GTIN',
    attr: 'gtin' 
  }, {
    header: 'Nazwa',
    attr: 'name' 
  }, {
    header: 'Jednostka logistyczna',
    attr: 'measure_unit' 
  }, {
    header: 'Jednostka handlowa',
    attr: 'unit' 
  }, {
    header: 'Cena zakupu [PLN]',
    attr: 'purchase_price' 
  }, {
    header: 'Cena sprzedaży [PLN]',
    attr: 'sale_price' 
  }, {
    header: 'Grupa asortymentowa',
    attr: 'assortment_group' 
  }, {
    header: 'Typ asortymentu',
    attr: 'assortment_type' 
  }, {
    header: 'Prawdopodobieństwo \nObsługi popytu [%]',
    attr: 'service_demand' 
  }, {
    header: 'Czas cyklu \nUzupełniania [dnia]',
    attr: 'refill_cycle_time' 
  }, {
    header: 'Odchylenia czasu \nCyklu uzupełnienia [dni]',
    attr: 'cycle_time_deviations' 
  }, {
    header: 'Współczynnik kosztu \nUtrzymania zapasu [-]',
    attr: 'inventory_cost_factor' 
  }, {
    header: 'Aktywny',
    attr: 'active' 
  }, {
    header: 'Na zamówienie',
    attr: 'to_order' 
  },
];

const assortment_group_header = [
  {
    header: 'Nazwa grupy',
    attr: 'name' 
  }, {
    header: 'Grupa główna',
    attr: 'is_main_group' 
  }, {
    header: 'Nazwa grupy głównej',
    attr: 'main_group' 
  }, {
    header: 'Kod',
    attr: 'code' 
  }, {
    header: 'Opis',
    attr: 'description' 
  }, {
    header: 'Prawdopodobieństwo obsługi popytu [%]',
    attr: 'service_demand' 
  }, {
    header: 'Czas cyklu uzupełniania [dni]',
    attr: 'refill_cycle_time' 
  }, {
    header: 'Odchylenie czasu cyklu uzupełnienia [dni]',
    attr: 'cycle_time_deviations' 
  }, {
    header: 'Współczynnik kosztu Utrzymania zapasu [-]',
    attr: 'inventory_cost_factor' 
  }
];

const warehouse_header = [
  {
    header: 'Nazwa magazynu',
    attr: 'name' 
  }, {
    header: 'Opis',
    attr: 'description' 
  }, {
    header: 'Aktywny',
    attr: 'active' 
  }
];

const warehouse_group_header = [
  {
    header: 'Nazwa grupy',
    attr: 'name' 
  }, {
    header: 'Przynależne magazyny',
    attr: 'warehouses' 
  }, {
    header: 'Aktywny',
    attr: 'active' 
  }, {
    header: 'Opis',
    attr: 'description' 
  }, {
    header: 'Przyjęcia',
    attr: 'received' 
  }, {
    header: 'Wydania',
    attr: 'releases' 
  }, {
    header: 'Zapas',
    attr: 'supply' 
  }
];

const contractor_header = [
  {
    header: 'Kod',
    attr: 'code' 
  }, {
    header: 'Nazwa',
    attr: 'name' 
  }, {
    header: 'GLN',
    attr: 'GLN' 
  }, {
    header: 'Ulica',
    attr: 'address' 
  }, {
    header: 'Kod pocztowy',
    attr: 'postal_code' 
  }, {
    header: 'Miasto',
    attr: 'city' 
  }, {
    header: 'Opis',
    attr: 'description' 
  }, {
    header: 'Czas realizacji Zamówienia [dni]',
    attr: 'order_fulfillment_time' 
  }, {
    header: 'Odchylenie czasu Realizacji [dni]',
    attr: 'delivery_time_deviation' 
  }, {
    header: 'Minimalna wielkość Zamówienia',
    attr: 'minimum_order_quantity' 
  }, {
    header: 'Minimalna wartość zamówienia [PLN]',
    attr: 'minimum_order_value' 
  }, {
    header: 'Dostawca',
    attr: 'supplier' 
  }, {
    header: 'Odbiorca',
    attr: 'recipient' 
  }, {
    header: 'Aktywny',
    attr: 'active' 
  }, {
    header: 'Dostawca pokrywa Koszty transportu',
    attr: 'supplier_transport' 
  }
];

const measure_unit_header = [
  {
    header: 'Nazwa',
    attr: 'name'
  }, {
    header: 'Opis',
    attr: 'description'
  }
];

const warehouse_operation_header = [
  {
    header: 'Asortyment',
    attr: 'assortment'
  }, {
    header: 'Grupa',
    attr: 'assortment_group'
  }, {
    header: 'Data',
    attr: 'date'
  }, {
    header: 'Jednostka Miary',
    attr: 'unit'
  }, {
    header: 'Jednostka Logistyczna',
    attr: 'measure_unit',
  }, {
    header: 'Magazyn',
    attr: 'warehouse'
  }, {
    header: 'Kontrahent',
    attr: 'contractor'
  }, {
    header: 'Wielkość przyjęć',
    attr: 'receipt_value'
  }, {
    header: 'Częstotliwość przyjęć [-]',
    attr: 'reception_frequency'
  }, {
    header: 'Wartość przyjęć [PLN]',
    attr: 'calculated_received_value'
  }, {
    header: 'Wielkość wydań',
    attr: 'issue_amount'
  }, {
    header: 'Częstotliwość wydań [-]',
    attr: 'release_frequency'
  }, {
    header: 'Wartość wydań [PLN]',
    attr: 'calculated_releases_value'
  }, {
    header: 'Zapas [jednostka miary]',
    attr: 'inventory'
  }, {
    header: 'Wartość zapasu [PLN]',
    attr: 'stock_value'
  }, {
    header: 'Wielkość zamówienia [jednostka miary]',
    attr: 'order_quantity'
  }, {
    header: 'Wartość Zamówienia [PLN]',
    attr: 'order_value'
  }
];

export {
  assortment_header,
  assortment_group_header,
  warehouse_header,
  warehouse_group_header,
  contractor_header,
  measure_unit_header,
  warehouse_operation_header
}