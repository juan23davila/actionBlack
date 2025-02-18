import { test, expect } from '@playwright/test';

test('book a class', async ({ browser }) => {
  const sede = "Aves María"; 
  const hour = "05"; 
  const minute = "10"; 
  const day="MAR";

  // Diccionario para obtener el índice basado en el día
  const dayIndex = {
    'DOM': 1,
    'LUN': 2,
    'MAR': 3,
    'MIE': 4,
    'JUE': 5,
    'VIE': 6,
    'SAB': 7
  };

  // 1. Create context and page
  const context = await browser.newContext()
  const page = await context.newPage()

  // 2. Navigate and open Sedes list
  await page.goto('/reservas');
  await page.locator(".reservas_select__YsLUn").click()

  // 3. Capture new tab after click in sede opt
  const [page2] = await Promise.all([
    context.waitForEvent('page'), // Esperar a que se cree la nueva página
    page.getByText(sede).click() // Evento que dispara la creación de la nueva pestaña
  ]);
  await page2.waitForLoadState('networkidle');

  // 4. Locate train session
  const locatorTrain = page2.locator(`
    xpath = 
      //span[@class='texto-horario' and text()='${hour}']
      /following-sibling::div
      /span[text()='${minute}']
      /ancestor::div[@class='container-grade']
      /div[${dayIndex[day]}]
  `);

  console.log(await locatorTrain.textContent())

  await context.close()
});