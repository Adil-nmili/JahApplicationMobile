// ... existing code ...
import React from 'react';
import  { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useRef, useEffect } from 'react';

export default function AproposNous() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showMoreFrench, setShowMoreFrench] = useState(false);
  const [showMoreArabic, setShowMoreArabic] = useState(false);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

 // ... existing code ...
return (
    <ScrollView style={styles.container}>
    <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
      <Text style={styles.title}>École JAH de Formation Professionnelle</Text>
      <Text style={styles.subtitle}>L'excellence en formation professionnelle depuis 2006</Text>
    </Animated.View>

    <View style={styles.contentContainer}>
      {/* Section Française */}
      <View style={styles.textFrame}>
        <Text style={styles.frameText}>
          Bonjour à toutes et à tous, Je suis le Dr Jamal Nouiti, directeur de l'établissement Jah de la formation professionnelle à Marrakech.
        </Text>
        
        <Text style={styles.frameText}>
          Comme vous le savez, la formation professionnelle a commencé à s'imposer sur le marché du travail et est devenue le principal pilier de la promotion de l'économie nationale, et cela en parallèle avec le développement technologique et scientifique.
        </Text>
        {showMoreFrench && (
            <>
              <Text style={styles.frameText}>
                Créée en 2006 et accréditée par l'État, l'école Jah de formation professionnelle délivre des diplômes qui permettent à ses étudiants d'intégrer le monde du travail, que ce soit dans le secteur public ou le secteur privé, ou de créer leurs propres projets tout en leur donnant tous les atouts nécessaires à la réussite.
              </Text>
              <Text style={styles.frameText}>
                Créée en 2006 et accréditée par l'État, l'école Jah de formation professionnelle délivre des diplômes qui permettent à ses étudiants d'intégrer le monde du travail, que ce soit dans le secteur public ou le secteur privé, ou de créer leurs propres projets tout en leur donnant tous les atouts nécessaires à la réussite.
              </Text>
              <Text style={styles.frameText}>
              L'établissement vous propose des diplômes agréés par l'état; qualification opérateur de saisi, technicien, technicien spécialisé, licence professionnelle, et master professionnel dans le domaine de l'administration, de la gestion des entreprises et de l'informatique.
              </Text>
              <Text style={styles.frameText}>
              L'établissement dispense également des formations professionnelles dans divers domaines : informatique, gestion, développement humain et accompagnement, machines de forage et excavateurs, chargeuses sur pneus et chariots élévateurs, journalisme, stylisme et couture, pâtisserie, secourisme, "Cupping Therapy“ ou la thérapie par les ventouses (Hijama), esthétique et cosmétologie, formation de professeurs d'éducation physique, préparateur physique, assistant(e) médical(e), système de sécurité incendie et prévention, langues vivantes, cours de soutien et de renforcement....
              </Text>
              <Text style={styles.frameText}>
              L'établissement occupe une place privilégiée auprès des diplômés en leur assurant le suivi et l'accompagnement nécessaires pour la réalisation de leurs projets, pour ce faire, l'école diversifie les moyens pour maintenir un contact permanent avec les lauréats comme elle organise des réunions et des séances gratuites pour la sensibilisation et l'orientation.
                L'établissement Jah garantit aux étudiants des stages sur terrain, des visites d'entreprises, et des activités culturelles , touristiques et sportives.
              </Text>
              {/* ... autres paragraphes en français ... */}
            </>
          )}
           <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => setShowMoreFrench(!showMoreFrench)}
          >
            <Text style={styles.readMoreButtonText}>
              {showMoreFrench ? 'Voir moins' : 'Lire la suite'}
            </Text>
          </TouchableOpacity>
        </View>
         {/* Section Arabe */}
         <View style={styles.textFrame}>
          <Text style={[styles.frameText, styles.arabicText]}>
            السلام عليكم و رحمة الله معكم الدكتور جمال نويتي مدير مؤسسة جاه للتكوين المهني الخاص بمراكش
          </Text>

          <Text style={[styles.frameText, styles.arabicText]}>
            كما تعلمون بأن التكوين المهني أصبح يفرض نفسه في سوق الشغل و أصبح الركيزة الأساسية للنهوض باقتصاد البلاد و خصوصا في عصر التكنولوجيا و التطوير العلمي
          </Text>

          {showMoreArabic && (
            <>
              <Text style={[styles.frameText, styles.arabicText]}>
                فمؤسسة جاه أنشأت سنة 2006 وهي معتمدة من طرف الدولة و تعطي دبلومات تسمح لطلبتها إلى الولوج لعالم الشغل سواء في القطاع العام أو القطاع الخاص أو خلق فرص شغل و ذلك بخلق مشاريع مذرة للدخل
              </Text>
              <Text style={[styles.frameText, styles.arabicText]}>
              فالمؤسسة تقترح عليكم دبلومات معتمدة من طرف الدولة تأهيلي، تقني، تقني متخصص، اجازة مهنية، ماستر مهني في مجال الإدارة و التسيير و الإعلاميات.
              </Text>
              <Text style={[styles.frameText, styles.arabicText]}>
              كما تقوم المؤسسة بتكوينات مهنية في مجالات متعددة : اعلاميات، تسيير، التنمية البشرية والمواكبة، الات الحفر والشحن والرافعات الشوكية، صحافة، الفصالة والخياطة، حلويات، اسعافات اولية، الحجامة العصرية، التجميل ، اساتذة تربية بدنية، معد بدني، مساعد طبي، نظام السلامة من الحرائق، لغات حية، دروس الدعم والتقوية....
              </Text>
              <Text style={[styles.frameText, styles.arabicText]}>
              وللتذكير فالمؤسسة لديها مكانة مميزة مع الخريجين من خلال تزويدهم بالمتابعة والدعم اللازمين لإنجاز مشاريعهم ، وللقيام بذلك تقوم المؤسسة بتنويع وسائل التواصل الدائم مع الخريجين حيث تنظم اجتماعات وجلسات مجانية لهم للتوعية والارشاد...
              وتضمن المؤسسة للطلبة تدريبات ميدانية وزيارات لشركات و أنشطة ثقافية وتربوية.
              </Text>
              {/* ... autres paragraphes en arabe ... */}
            </>
          )}
           <TouchableOpacity 
            style={[styles.readMoreButton, styles.arabicButton]}
            onPress={() => setShowMoreArabic(!showMoreArabic)}
          >
            <Text style={[styles.readMoreButtonText, styles.arabicText]}>
              {showMoreArabic ? 'عرض أقل' : 'قراءة المزيد'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
  
  const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        padding: 20,
        backgroundColor: '#e3f2fd',
        alignItems: 'center',
        justifyContent: 'center', // Centre les éléments horizontalement
        width: '100%', // Assure que le header prend toute la largeur
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 16,
        color: '#333333',
        marginTop: 5,
        textAlign: 'left',
      },
      contentContainer: {
        padding: 15,
      },
      textFrame: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      },
      frameText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
        textAlign: 'left',
      },
      arabicText: {
        textAlign: 'right',
        fontFamily: 'Arial',
      },
    frameText: {
      fontSize: 16,
      lineHeight: 24,
      color: '#333333',
      textAlign: 'left',
      marginBottom: 15, // Ajout d'une marge entre les paragraphes
    },
    readMoreButton: {
        backgroundColor: '#e3f2fd',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
      },
      
      readMoreButtonText: {
        color: '#1976d2',
        fontSize: 16,
        fontWeight: 'bold',
      },
      
      arabicButton: {
        alignItems: 'flex-end',
      },
});
   
  