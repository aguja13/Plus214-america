var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$lista = $('#contenido'),
	$post = $('.item').first();

if (localStorage.getItem('autosave')){
	$titulo_val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
	
}, 1000);

function mostrarOcultarFormulario(){
	$form.slideToggle();
	$lista.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$lista.prepend($clone);
	mostrarOcultarFormulario();
	$titulo.val(''); //limpia imput titulo
	$url.val(''); //limpia imput url
	$clone.slideDown();

	return false;
}

// Eventos

$('#publicar_nav').click( mostrarOcultarFormulario );
$('#formulario').on('submit', agregarPost );