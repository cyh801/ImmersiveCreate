// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
event.smoking('2x minecraft:paper', 'kubejs:pulp')
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('recipes', event => {
event.shaped('createaddition:electric_motor', [' B ', 'ACA', ' D '], {
                D: 'create:brass_casing',
                A: '#immersiveengineering:toolbox/connector',
                C: 'immersiveengineering:dynamo',
                B: 'create:cogwheel',
          });
});

onEvent('recipes', event => {
event.shaped('createaddition:alternator', [' B ', 'ACA', ' D '], {
                D: 'immersiveengineering:sheetmetal_iron',
                A: '#immersiveengineering:toolbox/connector',
                C: 'immersiveengineering:dynamo',
                B: 'create:cogwheel',
          });

          event.shaped('4x immersiveengineering:dust_steel', ['AB ', 'BA ', '   '], {
            A: 'immersiveengineering:dust_iron',
            B: '#forge:dusts/coal_coke',
      });          

onEvent('recipes', event => {
event.remove({output: 'minecraft:iron_sword'})
event.remove({output: 'minecraft:iron_axe'})
event.remove({output: 'minecraft:iron_shovel'})
event.remove({output: 'minecraft:iron_pickaxe'})
event.remove({output: 'minecraft:iron_hoe'})
event.remove({output: 'minecraft:iron_chestplate'})
event.remove({output: 'minecraft:iron_helmet'})
event.remove({output: 'minecraft:iron_leggings'})
event.remove({output: 'minecraft:iron_boots'})
event.remove({output: 'minecraft:paper',type: 'minecraft:crafting_shaped'})
event.remove({input: 'immersiveengineering:dust_gold',type: 'minecraft:blasting'})
event.remove({input: 'immersiveengineering:dust_copper',type: 'minecraft:blasting'})
event.remove({input: 'immersiveengineering:dust_iron',type: 'minecraft:blasting'})
event.remove({input: 'immersiveengineering:dust_gold',type: 'minecraft:smelting'})
event.remove({input: 'immersiveengineering:dust_copper',type: 'minecraft:smelting'})
event.remove({input: 'immersiveengineering:dust_iron',type: 'minecraft:smelting'})
event.remove({input: 'immersiveengineering:dust_steel',type: 'minecraft:blasting'})
event.remove({input: 'immersiveengineering:dust_steel',type: 'minecraft:smelting'})
event.remove({output: 'create:brass_ingot',type: 'create:mixing'})
      });

});