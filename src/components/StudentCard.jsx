<button
  type="button"
  onClick={() =>
    onModifier(
      etudiant || {
        id,
        prenom,
        nom,
        email,
        telephone,
        filiere,
        anneeEtude,
        groupe,
        ville,
        image,
      }
    )
  }
>
  Modifier
</button>