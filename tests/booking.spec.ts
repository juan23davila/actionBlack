import { test, expect } from '@playwright/test';

test('book a class', async ({ browser }) => {
  const sede = "Aves María", hour = "05", minute = "10", day="MAR"
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('/reservas');
  await page.locator(".reservas_select__YsLUn").click()

  // code to print list of clubs
  /*const clubes = await page.locator("//ul[@class = 'reservas_list_clubs__koaW6']/li").all()
  console.log(clubes)
  for(let e of clubes){
    const club = await e.textContent();
    console.log(club)
  }*/
  //page.getByText("Aves María").click()

  // En tu test
  const [page2] = await Promise.all([
    context.waitForEvent('page'),        // Esperar a que se cree la nueva página
    page.getByText(sede).click() // Evento que dispara la creación de la nueva pestaña
  ]);

  // Recomendado: esperar a que la nueva pestaña cargue
  await page2.waitForLoadState('networkidle');

  /*const rowsPerHour = await page2.locator("//span[@class='texto-horario' and text()="+hour+"]").all()
  for(let rowPerHour of rowsPerHour){
    const row = await rowPerHour.textContent();
    console.log(row)
  }*/

  const minuteOfClass = await page2.locator("//span[@class='texto-horario' and text()="+hour+"]/following-sibling::div/span[text()="+minute+"]")
  //console.log(await minuteOfClass.textContent())

  const classes = await minuteOfClass.locator("xpath=/parent::div/parent::div/parent::div[@class='container-grade']/div").all()
  /*for(let train of classes){
    const infoTrain = await train.textContent();
    console.log(infoTrain)
  }*/
  let train
  switch (day) {
    case "DOM":
      train = classes[1]
      break;

    case "LUN":
    train = classes[2]
    break;

    case "MAR":
      train = classes[3]
      break;

    case "MIE":
    train = classes[4]
    break;
  
    default:
      break;
  }

  console.log(await train.textContent())

  await context.close()
});