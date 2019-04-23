const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Le BOT est ON!")
})

bot.login(process.env.TOKEN)

bot.on('guildMemberAdd', member => {
  member.addRole('544502854111461396')
})

bot.on('message', message => {
  if (message.content === '/grimoire') {
  var magie = ['544298862802763796',  '544298861305266186',  '544298859703304203',  '544298857647833090', '544298855697481729', '544298853600329749', '544298851595714573', '544298849716404236', '544298847816384522', '544298846226874388', '544298842875625473', '544298841046777857', '544294588920234005', '544294588039561247', '544294587334656031', '544294587028602881', '544294586445725696', '544294585665323029', '544294585405538344', '544294584247910440', '544294583698194432', '544294582964191252', '544294582565994507', '544294581819408384', '544294581210972160', '544294580510654465', '544294580154007552', '544294579382386708', '544294578539462687', '544294578249924609', '544294577281171457', '544294577054416913', '544294576362618880', '544294575796387850', '544294575116779521', '544294574252883970', '544294573342720031', '544294572734545923', '544294572185092107', '544294571786371102', '544294571073470464', '544294570201055254', '544294569509126164', '544294568267481101', '544294449434460160']
  var already1 = 0
	for (i=0; i < magie.length; i++) {
	  if ( message.member.roles.has( magie[i] ) ) {
		already1 += 1
	  }
	}
	if ( already1 > 0 ) {
		if ( message.member.roles.has( '544294449434460160' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Ronces !' )
			message.channel.send( new Discord.Attachment('./magic/ronces.png', 'ronces.png') )
		}else if ( message.member.roles.has( '544294568267481101' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Bronze !' )
			message.channel.send( new Discord.Attachment('./magic/bronze.png', 'bronze.png') )
		}else if ( message.member.roles.has( '544294569509126164' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Cerisiers !' )
			message.channel.send( new Discord.Attachment('./magic/cerisier.png', 'cerisier.png') )
		}else if ( message.member.roles.has( '544294570201055254' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Cuivre !' )
			message.channel.send( new Discord.Attachment('./magic/cuivre.png', 'cuivre.png') )
		}else if ( message.member.roles.has( '544294571073470464' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire Cristallin !' )
			message.channel.send( new Discord.Attachment('./magic/cristaz.png', 'cristaz.png') )
		}else if ( message.member.roles.has( '544294571786371102' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Champignon !' )
			message.channel.send( new Discord.Attachment('./magic/champignon.png', 'champignon.png') )
		}else if ( message.member.roles.has( '544294572185092107' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire Boueux !' )
			message.channel.send( new Discord.Attachment('./magic/boue.png', 'boue.png') )
		}else if ( message.member.roles.has( '544294572734545923' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Plante !' )
			message.channel.send( new Discord.Attachment('./magic/plante.png', 'plante.png') )
		}else if ( message.member.roles.has( '544294573342720031' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Plante Empoisonnée !' )
			message.channel.send( new Discord.Attachment('./magic/planteempoisonee.png', 'planteempoisonee.png') )
		}else if ( message.member.roles.has( '544294574252883970' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire Rocheux !' )
			message.channel.send( new Discord.Attachment('./magic/pierre.png', 'pierre.png') )
		}else if ( message.member.roles.has( '544294575116779521' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire Sableux !' )
			message.channel.send( new Discord.Attachment('./magic/sable.png', 'sable.png') )
		}else if ( message.member.roles.has( '544294575796387850' ) ) {
			message.channel.send(  message.author + ", vous avez toujours le Grimoire Élémentaire d'Acier !" )
			message.channel.send( new Discord.Attachment('./magic/acier.png', 'acier.png') )
		}else if ( message.member.roles.has( '544294576362618880' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire des Arbres !' )
			message.channel.send( new Discord.Attachment('./magic/arbre.png', 'arbre.png') )
		}else if ( message.member.roles.has( '544294577054416913' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Vignes !' )
			message.channel.send( new Discord.Attachment('./magic/vignes.png', 'vignes.png') )
		}else if ( message.member.roles.has( '544294577281171457' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire Terrestre !' )
			message.channel.send( new Discord.Attachment('./magic/terre.png', 'terre.png') )
		}else if ( message.member.roles.has( '544294578249924609' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Feu !' )
			message.channel.send( new Discord.Attachment('./magic/feu.png', 'feu.png') )
		}else if ( message.member.roles.has( '544294578539462687' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire Aérien !' )
			message.channel.send( new Discord.Attachment('./magic/air.png', 'air.png') )
		}else if ( message.member.roles.has( '544294579382386708' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Cendre !' )
			message.channel.send( new Discord.Attachment('./magic/cendre.png', 'cendre.png') )
		}else if ( message.member.roles.has( '544294580154007552' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Coton !' )
			message.channel.send( new Discord.Attachment('./magic/coton.png', 'coton.png') )
		}else if ( message.member.roles.has( '544294580510654465' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Foudre !' )
			message.channel.send( new Discord.Attachment('./magic/foudre.png', 'foudre.png') )
		}else if ( message.member.roles.has( '544294581210972160' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Brouillard !' )
			message.channel.send( new Discord.Attachment('./magic/brouillard.png', 'brouillard.png') )
		}else if ( message.member.roles.has( '544294581819408384' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Fumée !' )
			message.channel.send( new Discord.Attachment('./magic/fumée.png', 'fumée.png') )
		}else if ( message.member.roles.has( '544294582565994507' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Vent !' )
			message.channel.send( new Discord.Attachment('./magic/vent.png', 'vent.png') )
		}else if ( message.member.roles.has( '544294582964191252' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Glace !' )
			message.channel.send( new Discord.Attachment('./magic/glace.png', 'glace.png') )
		}else if ( message.member.roles.has( '544294583698194432' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Mercure !' )
			message.channel.send( new Discord.Attachment('./magic/mercure.png', 'mercure.png') )
		}else if ( message.member.roles.has( '544294584247910440' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire de Neige !' )
			message.channel.send( new Discord.Attachment('./magic/neige.png', 'neige.png') )
		}else if ( message.member.roles.has( '544294585405538344' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Élémentaire Aqueux !' )
			message.channel.send( new Discord.Attachment('./magic/eau.png', 'eau.png') )
		}else if ( message.member.roles.has( '544294585665323029' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial Sauvage !' )
			message.channel.send( new Discord.Attachment('./magic/sauvage.png', 'sauvage.png') )
		}else if ( message.member.roles.has( '544294586445725696' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial Sanglant !' )
			message.channel.send( new Discord.Attachment('./magic/sanglant.png', 'sanglant.png') )
		}else if ( message.member.roles.has( '544294587028602881' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial de Chaines !' )
			message.channel.send( new Discord.Attachment('./magic/chaines.png', 'chaines.png') )
		}else if ( message.member.roles.has( '544294587334656031' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial de Rêves !' )
			message.channel.send( new Discord.Attachment('./magic/reves.png', 'reves.png') )
		}else if ( message.member.roles.has( '544294588039561247' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial Ludique !' )
			message.channel.send( new Discord.Attachment('./magic/ludique.png', 'ludique.png') )
		}else if ( message.member.roles.has( '544294588920234005' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial de Miroir !' )
			message.channel.send( new Discord.Attachment('./magic/miroir.png', 'miroir.png') )
		}else if ( message.member.roles.has( '544298841046777857' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial de Peinture!' )
			message.channel.send( new Discord.Attachment('./magic/peinture.png', 'peinture.png') )
		}else if ( message.member.roles.has( '544298842875625473' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial Tranchant!' )
			message.channel.send( new Discord.Attachment('./magic/tranchant.png', 'tranchant.png') )
		}else if ( message.member.roles.has( '544298846226874388' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial Filaire!' )
			message.channel.send( new Discord.Attachment('./magic/filaire.png', 'filaire.png') )
		}else if ( message.member.roles.has( '544298847816384522' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial de Vortex!' )
			message.channel.send( new Discord.Attachment('./magic/vortex.png', 'vortex.png') )
		}else if ( message.member.roles.has( '544298849716404236' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Spécial Ailé!' )
			message.channel.send( new Discord.Attachment('./magic/aile.png', 'aile.png') )
		}else if ( message.member.roles.has( '544298851595714573' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Légendaire Ténébreux !' )
			message.channel.send( new Discord.Attachment('./magic/tenebre.png', 'tenebre.png') )
		}else if ( message.member.roles.has( '544298853600329749' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Légendaire Lumineux !' )
			message.channel.send( new Discord.Attachment('./magic/lumiere.png', 'lumiere.png') )
		}else if ( message.member.roles.has( '544298855697481729' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Légendaire Temporel !' )
			message.channel.send( new Discord.Attachment('./magic/temps.png', 'temps.png') )
		}else if ( message.member.roles.has( '544298857647833090' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Légendaire Spatial !' )
			message.channel.send( new Discord.Attachment('./magic/spatial.png', 'spatial.png') )
		}else if ( message.member.roles.has( '544298859703304203' ) ) {
			message.channel.send(  message.author + ", vous avez toujours le Grimoire Légendaire de l'Arbre Monde !" )
			message.channel.send( new Discord.Attachment('./magic/arbremonde.png', 'arbremonde.png') )
		}else if ( message.member.roles.has( '544298861305266186' ) ) {
			message.channel.send(  message.author + ", vous avez toujours le Grimoire Légendaire de l'Épée !" )
			message.channel.send( new Discord.Attachment('./magic/epee.png', 'epee.png') )
		}else if ( message.member.roles.has( '544298862802763796' ) ) {
			message.channel.send(  message.author + ', vous avez toujours le Grimoire Légendaire Imitateur !' )
			message.channel.send( new Discord.Attachment('./magic/imitation.png', 'imitation.png') )
		}
	}else{
		var typegrimoire = Math.floor(Math.random() * 100)
		if (typegrimoire <= 70 ){
			var magie1 = Math.floor(Math.random() * 270)
			if (magie1 <= 10) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Ronces !' )
				message.channel.send( new Discord.Attachment('./magic/ronces.png', 'ronces.png') )
				message.member.addRole('544294449434460160')
			} else if (magie1 <= 20) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Bronze !' )
				message.channel.send( new Discord.Attachment('./magic/bronze.png', 'bronze.png') )
				message.member.addRole('544294568267481101')
			} else if (magie1 <= 30) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Cerisiers !' )
				message.channel.send( new Discord.Attachment('./magic/cerisier.png', 'cerisier.png') )
				message.member.addRole('544294569509126164')
			} else if (magie1 <= 40) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Cuivre !' )
				message.channel.send( new Discord.Attachment('./magic/cuivre.png', 'cuivre.png') )
				message.member.addRole('544294570201055254')
			} else if (magie1 <= 50) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire Cristallin !' )
				message.channel.send( new Discord.Attachment('./magic/cristaz.png', 'cristaz.png') )
				message.member.addRole('544294571073470464')
			} else if (magie1 <= 60) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Champignon !' )
				message.channel.send( new Discord.Attachment('./magic/champignon.png', 'champignon.png') )
				message.member.addRole('544294571786371102')
			} else if (magie1 <= 70) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire Boueux !' )
				message.channel.send( new Discord.Attachment('./magic/boue.png', 'boue.png') )
				message.member.addRole('544294572185092107')
			} else if (magie1 <= 80) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Plante !' )
				message.channel.send( new Discord.Attachment('./magic/plante.png', 'plante.png') )
				message.member.addRole('544294572734545923')
			} else if (magie1 <= 90) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Plante Empoisonnée !' )
				message.channel.send( new Discord.Attachment('./magic/planteempoisonee.png', 'planteempoisonee.png') )
				message.member.addRole('544294573342720031')
			} else if (magie1 <= 100) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire Rocheux !' )
				message.channel.send( new Discord.Attachment('./magic/pierre.png', 'pierre.png') )
				message.member.addRole('544294574252883970')
			} else if (magie1 <= 110) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire Sableux !' )
				message.channel.send( new Discord.Attachment('./magic/sable.png', 'sable.png') )
				message.member.addRole('544294575116779521')
			} else if (magie1 <= 120) {
				message.channel.send( 'Bravo ' + message.author + ", vous avez obtenu le Grimoire Élémentaire d'Acier !" )
				message.channel.send( new Discord.Attachment('./magic/acier.png', 'acier.png') )
				message.member.addRole('544294575796387850')
			} else if (magie1 <= 130) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire des Arbres !' )
				message.channel.send( new Discord.Attachment('./magic/arbre.png', 'arbre.png') )
				message.member.addRole('544294576362618880')
			} else if (magie1 <= 140) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Vignes !' )
				message.channel.send( new Discord.Attachment('./magic/vignes.png', 'vignes.png') )
				message.member.addRole('544294577054416913')
			} else if (magie1 <= 150) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire Terrestre !' )
				message.channel.send( new Discord.Attachment('./magic/terre.png', 'terre.png') )
				message.member.addRole('544294577281171457')
			} else if (magie1 <= 160) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Feu !' )
				message.channel.send( new Discord.Attachment('./magic/feu.png', 'feu.png') )
				message.member.addRole('544294578249924609')
			} else if (magie1 <= 170) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire Aérien !' )
				message.channel.send( new Discord.Attachment('./magic/air.png', 'air.png') )
				message.member.addRole('544294578539462687')
			} else if (magie1 <= 180) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Cendre !' )
				message.channel.send( new Discord.Attachment('./magic/cendre.png', 'cendre.png') )
				message.member.addRole('544294579382386708')
			} else if (magie1 <= 190) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Coton !' )
				message.channel.send( new Discord.Attachment('./magic/coton.png', 'coton.png') )
				message.member.addRole('544294580154007552')
			} else if (magie1 <= 200) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Foudre !' )
				message.channel.send( new Discord.Attachment('./magic/foudre.png', 'foudre.png') )
				message.member.addRole('544294580510654465')
			} else if (magie1 <= 210) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Brouillard !' )
				message.channel.send( new Discord.Attachment('./magic/brouillard.png', 'brouillard.png') )
				message.member.addRole('544294581210972160')
			} else if (magie1 <= 220) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Fumée !' )
				message.channel.send( new Discord.Attachment('./magic/fumée.png', 'fumée.png') )
				message.member.addRole('544294581819408384')
			} else if (magie1 <= 230) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Vent !' )
				message.channel.send( new Discord.Attachment('./magic/vent.png', 'vent.png') )
				message.member.addRole('544294582565994507')
			} else if (magie1 <= 240) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Glace !' )
				message.channel.send( new Discord.Attachment('./magic/glace.png', 'glace.png') )
				message.member.addRole('544294582964191252')
			} else if (magie1 <= 250) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Mercure !' )
				message.channel.send( new Discord.Attachment('./magic/mercure.png', 'mercure.png') )
				message.member.addRole('544294583698194432')
			} else if (magie1 <= 260) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire de Neige !' )
				message.channel.send( new Discord.Attachment('./magic/neige.png', 'neige.png') )
				message.member.addRole('544294584247910440')
			} else {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Élémentaire Aqueux !' )
				message.channel.send( new Discord.Attachment('./magic/eau.png', 'eau.png') )
				message.member.addRole('544294585405538344')
			}
			message.member.addRole('544288659159908364')
		}else if (typegrimoire <= 90 ){
			var magie2 = Math.floor(Math.random() * 110)
			if (magie2 <= 10) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial Sauvage !' )
				message.channel.send( new Discord.Attachment('./magic/sauvage.png', 'sauvage.png') )
				message.member.addRole('544294585665323029')
			} else if (magie2 <= 20) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial Sanglant !' )
				message.channel.send( new Discord.Attachment('./magic/sanglant.png', 'sanglant.png') )
				message.member.addRole('544294586445725696')
			} else if (magie2 <= 30) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial de Chaines !' )
				message.channel.send( new Discord.Attachment('./magic/chaines.png', 'chaines.png') )
				message.member.addRole('544294587028602881')
			} else if (magie2 <= 40) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial de Rêves !' )
				message.channel.send( new Discord.Attachment('./magic/reves.png', 'reves.png') )
				message.member.addRole('544294587334656031')
			} else if (magie2 <= 50) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial Ludique !' )
				message.channel.send( new Discord.Attachment('./magic/ludique.png', 'ludique.png') )
				message.member.addRole('544294588039561247')
			} else if (magie2 <= 60) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial de Miroir !' )
				message.channel.send( new Discord.Attachment('./magic/miroir.png', 'miroir.png') )
				message.member.addRole('544294588920234005')
			} else if (magie2 <= 70) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial de Peinture!' )
				message.channel.send( new Discord.Attachment('./magic/peinture.png', 'peinture.png') )
				message.member.addRole('544298841046777857')
			} else if (magie2 <= 80) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial Tranchant!' )
				message.channel.send( new Discord.Attachment('./magic/tranchant.png', 'tranchant.png') )
				message.member.addRole('544298842875625473')
			} else if (magie2 <= 90) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial Filaire!' )
				message.channel.send( new Discord.Attachment('./magic/filaire.png', 'filaire.png') )
				message.member.addRole('544298846226874388')
			} else if (magie2 <= 100) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial de Vortex!' )
				message.channel.send( new Discord.Attachment('./magic/vortex.png', 'vortex.png') )
				message.member.addRole('544298847816384522')
			} else {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Spécial Ailé!' )
				message.channel.send( new Discord.Attachment('./magic/aile.png', 'aile.png') )
				message.member.addRole('544298849716404236')
			}
			message.member.addRole('544289363471892510')
		}else {
			var magie3 = Math.floor(Math.random() * 70)
			if (magie3 <= 10) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Légendaire Ténébreux !' )
				message.channel.send( new Discord.Attachment('./magic/tenebre.png', 'tenebre.png') )
				message.member.addRole('544298851595714573')
			}else if (magie3 <= 20) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Légendaire Lumineux !' )
				message.channel.send( new Discord.Attachment('./magic/lumiere.png', 'lumiere.png') )
				message.member.addRole('544298853600329749')
			}else if (magie3 <= 30) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Légendaire Temporel !' )
				message.channel.send( new Discord.Attachment('./magic/temps.png', 'temps.png') )
				message.member.addRole('544298855697481729')
			}else if (magie3 <= 40) {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Légendaire Spatial !' )
				message.channel.send( new Discord.Attachment('./magic/spatial.png', 'spatial.png') )
				message.member.addRole('544298857647833090')
			}else if (magie3 <= 50) {
				message.channel.send( 'Bravo ' + message.author + ", vous avez obtenu le Grimoire Légendaire de l'Arbre Monde !" )
				message.channel.send( new Discord.Attachment('./magic/arbremonde.png', 'arbremonde.png') )
				message.member.addRole('544298859703304203')
			}else if (magie3 <= 60) {
				message.channel.send( 'Bravo ' + message.author + ", vous avez obtenu le Grimoire Légendaire de l'Épée !" )
				message.channel.send( new Discord.Attachment('./magic/epee.png', 'epee.png') )
				message.member.addRole('544298861305266186')
			}else {
				message.channel.send( 'Bravo ' + message.author + ', vous avez obtenu le Grimoire Légendaire Imitateur !' )
				message.channel.send( new Discord.Attachment('./magic/imitation.png', 'imitation.png') )
				message.member.addRole('544298862802763796')
			}
			message.member.addRole('544289360762372111')
		}
		message.member.addRole('544288791431610368')
		message.member.addRole('544482763005362176')
	  }
  }else if (message.content === '/trèfle') {
    var trefle = ['544592082489049088',  '544592083781156884',  '544592080786423813',  '544592079519612938']
    var already2 = 0
	for (i=0; i < trefle.length; i++) {
	  if ( message.member.roles.has( trefle[i] ) ) {
		already2 += 1
	  }
	}
	if ( already2 > 0 ) {
	  if ( message.member.roles.has( '544592082489049088' ) ) {
		message.channel.send(message.author + ', tu as déjà un grimoire au Trèfle à une feuille !')
	  }else if ( message.member.roles.has( '544592083781156884' ) ) {
		message.channel.send(message.author + ', tu as déjà un grimoire au Trèfle à deux feuille !')
	  }else if ( message.member.roles.has( '544592080786423813' ) ) {
		message.channel.send(message.author + ', tu as déjà un grimoire au Trèfle à trois feuille !')  
	  }else if ( message.member.roles.has( '544592079519612938' ) ) {
		message.channel.send(message.author + ', tu as déjà un grimoire au Trèfle à quatre feuille !')  
	  }
	}else{
	  var trefle1 = Math.floor(Math.random() * 100)
	  if (trefle1 <= 20) {
		message.channel.send('Bravo ' + message.author + ', ton grimoire possède un trèfle à une feuille !')
		message.member.addRole('544592082489049088') 
	  }else if (trefle1 <= 40) {
		message.channel.send('Bravo ' + message.author + ', ton grimoire possède un trèfle à deux feuille !')
		message.member.addRole('544592083781156884')  
	  }else if (trefle1 <= 85) {
		message.channel.send('Bravo ' + message.author + ', ton grimoire possède un trèfle à trois feuille !')
		message.member.addRole('544592080786423813')  
	  }else {
		message.channel.send('Bravo ' + message.author + ', ton grimoire possède un trèfle à quatre feuille !')
		message.member.addRole('544592079519612938')  
	  }
	  message.member.addRole('544288791431610368')
	}
  }else if (message.content === '/rang') {
	var rang = ['544930797430505473',  '544929615236300811',  '545199553247444992']
    var already3 = 0
	for (i=0; i < rang.length; i++) {
	  if ( message.member.roles.has( rang[i] ) ) {
		already3 += 1
	  }
	}
	if ( already3 > 0 ) {
	  if ( message.member.roles.has( '544930797430505473' ) ) {
		message.channel.send(message.author + ', tu es déjà un Noble ! !')
	  }else if ( message.member.roles.has( '544929615236300811' ) ) {
		message.channel.send(message.author + ', tu es déjà un Bourgeois !')
	  }else if ( message.member.roles.has( '545199553247444992' ) ) {
		message.channel.send(message.author + ', tu es déjà un Paysan !')  
	  }
	}else{
	  var rang1 = Math.floor(Math.random() * 100)
	  if (rang1 <= 60) {
		message.channel.send('Bravo ' + message.author + ', tu es un Paysan !')
		message.member.addRole('545199553247444992') 
	  }else if (rang1 <= 90) {
		message.channel.send('Bravo ' + message.author + ', tu es un Bourgeois !')
		message.member.addRole('544929615236300811')  
	  }else {
		message.channel.send('Bravo ' + message.author + ', tu es un Noble !')
		message.member.addRole('544930797430505473') 
	  }
	  message.member.addRole('544479060533968898')
	}
  }
})

bot.on('message', message => {
  if (message.author.bot) return

  const args = message.content.slice(1).trim().split(' ')
  const command = args.shift().toLowerCase()
 
  if (command === "roleid") {
  let [rolename] = message.mentions.roles
  message.reply("L'ID du rôle est " + rolename + " !")
  }else if (message.content.slice(0,5).toLowerCase() === '/roll') {
	if ( args[0] ) {
	  if ( parseInt( args[0], 10 ) ) {
	    message.reply('Tu as tiré les dès et fait ' + Math.floor(Math.random() * (parseInt( args[0], 10) + 1 ) ) + ' !' )
	  } else {
		message.reply('Tu as tiré les dès et fait ' + Math.floor(Math.random() * 101 ) + ' !' )
      }
	} else {
	  message.reply('Tu as tiré les dès et fait ' + Math.floor(Math.random() * 101) + ' !' )
	}
  }else if (message.content === '/action' || message.content === '/a') {
	var train = Math.floor(Math.random() * 100)
    if (train < 50 ) {
      message.channel.send( message.author + ', Vous avez malheureusement raté votre action ! ( ' + train + ' )')
    }else {
      message.channel.send( message.author + ', Vous avez heureusement réussi votre action ! ( ' + train + ' )')
	}
  }else if (message.content === '/KKK') {
	message.channel.send('Bienvenue dans le KKK, confrère ' + message.author )
	message.channel.send(new Discord.Attachment('./easteregg/kkk.png', 'kkk.png') )
  }
})
